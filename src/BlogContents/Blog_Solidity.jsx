import imgTransaction from '../assets/images/blogs/solidity/transactions.png'
import imgUI from '../assets/images/blogs/solidity/gameUI.png'
import imgContract from '../assets/images/blogs/solidity/contract.png'
import imgTruffle from '../assets/images/blogs/solidity/truffle.png'
import imgDeployed from '../assets/images/blogs/solidity/contractDeployed.png'
import imgAPI from '../assets/images/blogs/solidity/api.png'
import imgHelper from '../assets/images/blogs/solidity/helper.png'
import imgPolling from '../assets/images/blogs/solidity/polling.png'
import imgNonpay from '../assets/images/blogs/solidity/nonpayable.png'
import imgEvent from '../assets/images/blogs/solidity/event.png'
import imgLog from '../assets/images/blogs/solidity/log.png'
import imgEntry from '../assets/images/blogs/solidity/entry.png'
import imgResult from '../assets/images/blogs/solidity/result.png'
import Highlight from 'react-highlight'


export default function Blog_Solidity(){

    return <>
								<p> 这次做了一个智能合约集成Unity的Demo。主要用到的工具有Unity，Visual Studio，Truffle，Ganache, Remix。与Web3的链接依靠Infura和Nethereum。Truffle项目会传 <a href="https://github.com/QwertyQwh/Web3-RPS">Github</a>。  </p>
                                <p className="image"> <img src={imgTransaction}  /></p>
								<p> 这个Demo的效果非常简单，两个玩家（实际上支持任意多玩家的顺序匹配）花费1以太币进场玩石头剪刀布。赢的一方赢到2ETH，输得一方血本无归，平局两边各自拿回本钱。正常人的第一反应该是这个问题so easy，简单来说第一步两边交钱，第二步等待双方上传结果，等合约判断两边都上传完毕，再自动结算给赢家账户打钱即可。</p>
                                <p className="image"> <img src={imgUI}  /></p>
									<p> 但是要记得智能合约相当于是完全公开的服务器，合约上private的变量也是完全可查的，玩家随时可以自己查看服务器的一切存储数据。譬如玩家一先选择了石头并上传，玩家二可以通过直接查询合约了解到玩家一的选择。 简单地把一切结果上传会让过早的暴露自己的信息，从而导致游戏双方的信息不对称。 另外玩家除了通过unity里的代码正常跑程序之外，随时可以从其他的web3接口调用合约上的函数。打个比方说，游戏UI上玩家选中石头后我们可以把所有选项隐藏，这样玩家就无法再变更选择了....吗？完全不是，玩家可以另开一个javascript的web3接口，再调你传石头给服务器的函数。只要他有自己的私钥，想干什么都可以。这两点是我们要解决的问题。  </p>
								<p> 不多废话，先上合约。  </p>
                        
<pre><code>

    pragma solidity &gt= 0.4.22 &lt0.9.0;<br />
<br />
error AlreadyMatchingError();<br />
error NotEnoughEntranceFeeError();<br />
error EntranceFeeNotPaidError();<br />
error NoMatchError();<br />
error ChoiceConflictError();<br />
error ChoiceOutOfRangeError();<br />


contract RPS&#123;<br />
	mapping(address =&gt address) matching;<br />
	address waiting;<br />
	mapping(address=&gt uint) deposits;<br />
	mapping(address=&gtuint) rewards;<br />
	mapping(address=&gt uint) choices;<br />
	event Cleared(address indexed _player, int win);<br />
	uint constant Ticket = 1000000000000000000;<br />
    <br />
    <br />
	function PayForEntrance() public payable&#123;<br />
		if(msg.value &lt Ticket) &#123;<br />
			revert NotEnoughEntranceFeeError();<br />
        &#125;<br />
		deposits[msg.sender] += msg.value;<br />
    &#125;<br />
    <br />
    <br />
	function StartMatching() public &#123;<br />
		if(deposits[msg.sender]&lt Ticket)&#123;<br />
			revert EntranceFeeNotPaidError();<br />
        &#125;<br />
		if(waiting == msg.sender || matching[msg.sender] != address(0))&#123;<br />
			revert AlreadyMatchingError();<br />
        &#125;<br />
		if(waiting != address(0))&#123;<br />
			matching[msg.sender] = waiting;<br />
			matching[waiting] = msg.sender;<br />
        &#125;else&#123;<br />
			waiting = msg.sender;<br />
        &#125;<br />
    &#125;<br />
	<br />
	function GetMatchingStatus() public view returns(bool)&#123;<br />
		if(matching[msg.sender] != address(0))&#123;<br />
			return true;<br />
        &#125;<br />
		return false;<br />
	&#125;<br />
    <br />
	function SendChoice(uint choice) public &#123;<br />
		// Hasn't matched<br />
		if(!GetMatchingStatus())&#123;<br />
			revert NoMatchError();<br />
		&#125;<br />
		//Choice already sent<br />
		if(choices[msg.sender] != 0)&#123;<br />
			revert ChoiceConflictError();<br />
		&#125;<br />
		if(choice == 0 || choice &gt 3)&#123;<br />
			revert ChoiceOutOfRangeError();<br />
		&#125;<br />
		address opponent = matching[msg.sender];<br />
		uint otherChoice = choices[opponent];<br />
		// The opponent hasn't made their decision, (but should as soon as their GetMatchingStatus returns true)<br />
		if(otherChoice == 0)&#123;<br />
			choices[msg.sender] = choice;<br />
			return;<br />
		&#125;<br />
		// Both parties have made decisions. It's time for a clearance. <br />
		int win = 0;<br />
		if(choice != otherChoice)&#123;<br />
			if(choice == 3)&#123;<br />
				if(otherChoice == 1)&#123;<br />
					win = -1;<br />
				&#125;else&#123;<br />
					win = 1;<br />
				&#125;<br />
			&#125;else if(choice == 1)&#123;<br />
				if(otherChoice == 2)&#123;<br />
					win = -1;<br />
				&#125;else&#123;<br />
					win = 1;<br />
				&#125;<br />
			&#125;else&#123;<br />
				if(otherChoice == 3)&#123;<br />
					win = -1;<br />
				&#125;else&#123;<br />
					win = 1;<br />
				&#125;<br />
			&#125;<br />
		&#125;<br />
		if(win &gt=0 )<br />
			rewards[msg.sender] += deposits[msg.sender];<br />
		else<br />
			rewards[opponent] += deposits[msg.sender];<br />
		if(win &lt= 0)<br />
			rewards[opponent] += deposits[opponent];<br />
		else<br />
			rewards[msg.sender] += deposits[opponent];<br />
            <br />
		// Clear the deposits<br />
		deposits[msg.sender] =0;<br />
		deposits[opponent] = 0;<br />
		// Notify the waiting parties<br />
		choices[msg.sender] = 0;<br />
		choices[opponent] = 0;<br />
		//Clear everything up <br />
		delete matching[opponent]; <br />
		delete matching[msg.sender];<br />
		waiting = address(0);<br />
		emit Cleared(msg.sender, win);<br />
		emit Cleared(opponent, -win);<br />
	&#125;<br />
    <br />
    <br />
	function WithDraw() public&#123;<br />
		uint amount = rewards[msg.sender];<br />
		payable(msg.sender).transfer(amount);<br />
		rewards[msg.sender] = 0;<br />
	&#125;<br />
    <br />
&#125;<br />
</code></pre>

								<p> 大部分代码都直截了当。要注明的是第一：玩家在做好选择之后这个数据会先存在本地，只是调用StartMatching()来告诉合约我选好了，在StartMatching()之后需要不断地发polling来查询GetMatchingStatus()，不过带view标签的函数并不会改变合约的状态，因此不会有矿工的计算成本，因此不会有Gas Fee。所以即使一秒查个一千次也完全不会账户蒸发。第二：游戏逻辑保证了SendChoice()被调用时两边都已经做好了选择，杜绝了一方信息暴露的问题。如果玩家不通过游戏逻辑自己调用SendChoice()会怎么样？Ta会提前暴露自己的选择，后果自负。第三：使用Withdraw Pattern来防止打钱账户出错导致整个流程崩溃。  </p>

								<p>接下来我们就打开ganache客户端，在配置里选择我们的truffle项目。然后用"truffle migrate"命令来把合约放置在本地链上。放置前后效果如图。</p>

                                <p className="image"> <img src={imgTruffle}  /></p>
                                <p className="image"> <img src={imgContract}  /></p>
                                <p className="image"> <img src={imgDeployed}  /></p>

								<p>合约这一块就算完成了。我们得去unity里和合约互动了。 </p>

								  <p>要在C#里查询合约，首先需要把合约的API转进来。这个在VS Code里右键自己的sol文件，选择编译C#文件就可以实现。编译之后的合约函数大概长这样。</p>

                                <p className="image"> <img src={imgAPI}  /></p>

								  <p>对了，别忘了把Nethereum提供的dll文件全部丢到unity里，可以和我们的合约文件放一个目录下。</p>

								  <p>Nethereum提供了专门的接口来给Unity使用（虽然很拉跨），只要引用"Nethereum.JsonRpc.UnityClient"就行。</p>

								  <p>在开始前建议把账户地址，私钥，合约地址先从ganache上复制到helper里，因为会一直用到。</p>

                                <p className="image"> <img src={imgHelper}  /></p>

								  <p>大概说一下我们会用到的三种合约互动方式。</p>


                                <p className="image"> <img src={imgPolling}  /></p>

								  <p>第一种是和带view标签的函数互动，这一种最简单，因为不会产生实际的费用，只要提供账户和合约地址就行（不要私钥！也就是说你可以假装任何一个账户来调用view函数！）。举个例子，我们想要每一秒调用一次GetMatchingStatus()函数，就可以这么写↑。</p>
								 
                                <p className="image"> <img src={imgNonpay}  /></p>
								 
								  <p>第二种是和带nonpayable标签的函数互动，这一种标签也是默认的函数标签。因为会改变合约的状态所以会产生费用，但是不会发生账户之间，或者合约和账户间的以太币转移。这里就需要提供账户，私钥，和合约地址。同时还要填写Gas Fee相关的数值。最后在Amount一栏必须是0，不然产生实际转账会revert。 举个例子，我们想要调用一次StartMatching()函数，就可以这么写↑。</p>

                                <p className="image"> <img src={imgEntry}  /></p>
								  <p>第三种是和带payable标签的函数互动。和第二类大致相同，不过会把一定数量的ETH转到合约的账户下。举个例子，我们想要调用一次PayForEntrance()函数，就可以这么写↑。</p>
                                <p className="image"> <img src={imgEvent}  /></p>
								  <p>最后是事件的监听。合约上的事件可以理解为一个存储结构。这些数据可以像sql一样按照某一列来筛选。需要监听事件就需要去事件的记录里查到自己要的数据。我们在游戏结算后等待三秒去查询cleared事件，从而知道结果，并领取奖励↑。</p>

								  <p>实际游戏运行的结果如图。这里我扮演两个玩家打了一局。玩家一出了石头，玩家二出了布。首先是unity打出来的log。</p>

                                <p className="image"> <img src={imgLog}  /></p>

								  <p>然后是ganache上打出的交易和事件记录。</p>

                                <p className="image"> <img src={imgTransaction}  /></p>

								  <p>最后是账户余额。玩家二是我，玩家二赢钱啦！</p>

                                  <p className="image"> <img src={imgResult}  /></p>
								  
								  <p>我没有在testnet做测试，因为没钱。下一步想继续了解的话可以写一个实现ERC20的合约试试看吧。</p>

    </>
}