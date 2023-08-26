import imgFeatured from '../assets/images/blogs/hyperbolic/featured.png'
import imgHyper1 from '../assets/images/blogs/hyperbolic/webHyper1.png'
import imgHyper2 from '../assets/images/blogs/hyperbolic/webHyper2.png'
import imgAppel from '../assets/images/blogs/hyperbolic/appel.png'
import imgRtx from '../assets/images/blogs/hyperbolic/wikirtx.png'
import imgSdf from '../assets/images/blogs/hyperbolic/sdf.jpg'
import imgMarch2 from '../assets/images/blogs/hyperbolic/racymarch2.png'
import imgMarch4 from '../assets/images/blogs/hyperbolic/raymarch4.png'
import imgBug3 from '../assets/images/blogs/hyperbolic/bug3.png'
import imgBug4 from '../assets/images/blogs/hyperbolic/bug4.png'
import imgAmbient from '../assets/images/blogs/hyperbolic/ambient.png'
import imgDiffuse from '../assets/images/blogs/hyperbolic/diffuse.png'
import imgSpecular from '../assets/images/blogs/hyperbolic/specular.png'
import imgCombined from '../assets/images/blogs/hyperbolic/combined.png'
import imgMaze from '../assets/images/blogs/hyperbolic/flat_maze.png'
import Tex2SVG from "react-hook-mathjax";

export default function Blog_Hyperbolic(){
    const ascii = 	''

    return <>
                                <p className="image"> <img src={imgFeatured}  /></p>

<p> This post is a brief introduction to visualizing hyperbolic space. You'll find a link to my github sources at the end.</p>

								<p> To understand what a hyperbolic space is, we define both the <bold>space</bold> and the <bold>distances</bold> slightly differently from its usual Euclidean notion. I sometimes like to think of it as a 'crumpled' space. </p>
<p>For some intuition, on the left are three "straight lines" on a shiny Euclidean paper. On the right, are the correponding "straight" lines on a Hyperbolic paper. </p>
	

<p className="image"> <img src={imgHyper1}  /></p>
<p className="image"> <img src={imgHyper2}  /></p>
<p> Next we are going a minimal tour in the Math Realm. Don't panic. It won't hurt a bit. </p>
<p>Let \(k\) denote a field of characteristics different from 2 and \(E\) a vector space over \(k\) of finite dimension \(n\).  A <bold>quadratic form</bold>  on \(E\) is a function \(Q: E\to k\) homogeneous of degree 2, i.e.
									
									$$Q(\lambda z) = \lambda^2 Q(z); $$

									for any  \(\lambda \in k, z \in E\).</p>

  
									<p>	The reader can prove that for a given qudratic form \(Q\), the associated form \(\langle~,~ \rangle: E\times E \to k\) given by the polarization formula
$$
  \langle x,y\rangle = \frac{1}{2}(Q(x+y)-Q(x)-Q(y))  
$$
is a symmetric biliear form. </p>
<p>Given a quadratic form, \(x,y\in E\) are called <bold>orthogonal</bold> if \(\langle x,y\rangle = 0\). Linear subspaces \(U,V\) of \(E\) are <bold>orthogonal</bold> if \(\langle u,v\rangle = 0\) for all \(u\in U, v\in V\).  For a given linear subspace \(U\), the <bold>total orthogonal subspace</bold> \(U^\perp \) is given by 
$$
U^\perp  = e \in E \ |\ \langle e,u \rangle = 0,  \forall u \in U.
$$
The form \(Q\) is <bold>non-singular</bold> if \(E^\perp = 0\).</p>     

<p>Let \(Q\) be a quadratic form on \(\mathbb&#123;R&#125;^n\). A proof by induction shows that there exists an orthonormal basis for \(E\), i.e. a basis \(e_1,e_2,\cdots,e_n\) with 
	$$
	\langle e_i,e_j\rangle = 
	\begin&#123;cases&#125;
	0 &i\neq j;\\
	-1,0,1 & i = j.
	\end&#123;cases&#125;
	$$</p>
    <p>
	We're set to state the famed <bold>Sylvester’s Theorem</bold>. For any orthonormal basis \(e_1,\cdots, e_n\) for a quadratic form \(Q\) over \(E= \mathbb&#123;R&#125;^n\), the numbers 
	$$
	\begin&#123;align*&#125;
	p &= \left \vert \&#123;i \ \vert\  \langle e_i,e_i \rangle = -1\&#125; \right \vert \\
	q  &=  \left \vert \&#123;i \ \vert\ \langle e_i,e_i \rangle  =1\&#125; \right \vert
	\end&#123;align*&#125;
	$$
	are constant, independent of the basis considered. 
	</p>
	<p>Take a break, catch your breath. The <bold>hyperbolic space</bold> is already in sight. It's just another metric space, meaning it takes a set of points and assigns distances to each pair of them in a way that makes sense. The actual definition is a one-liner but the proof takes efforts, which we have been omitting anyway.</p>

									<p>As before let us consider \(F\) to be \(\mathbb&#123; R &#125;^&#123;n+1&#125;\) equipped with a quadratic form of Sylvester type \((-n,1)\). The hyperboloid \(S(F)\) is just the set of points with norm 1. It turns out \(S(F)\) has two connected components, and we will denote \(H^n\) to be either one of them.</p>
									<p>We then define our metric on the hyperboloid to be 
										$$
										\cosh d(P,Q) = \langle P,Q\rangle, \qquad P,Q\in H^n
										$$
										This makes sense since \(\langle P,Q\rangle \geq 1\). The metric is clearly symmetrical in \(P\) and \(Q\). For \(P\neq Q\) we have that \(\langle P,Q\rangle {'>'} 1\) and \(d(P,Q) {'>'}0\). The reader is welcome to prove the triangular inequality.</p>

                                        <p>I suppose I've lost most of you at this point. Let's keep on anyways. We'll do some extras by defining the 'rays' for our raymarching algorithm. 			</p>					
                                        <p>
									In a metric space \(M\), a curve \(\gamma: I\to M\) where \(I\) is an interval in \(\mathbb&#123;R&#125;\) is a geodesic if 
									$$
									d(\gamma(s),\gamma(t)) = \vert s-t\vert
									$$
									for any \(s,t \in I\).

									
								</p>
                                <p>
								Any geodesic curve \(\gamma:\mathbb&#123;R&#125;\to H^n\) can be written in the form 
								$$
								\gamma(t) = A \cosh t +T\sinh t, \qquad t\in \mathbb&#123;R&#125;
								$$
								where \(A \in H^n\) and \(T\) is a unit tangent vector to \(H^n\) at \(A\).
							</p>
<p>If you play games at all, you'd probably heard of raytracing. Raytracing and its variant spheretracing, is a way of detecting geometric shapes in 3D and recording the information on 2D 'lens'. It's surprisingly intuitive and the basic mechanism could be contained on one single page. Here are two famous illustrations.</p>

<p className="image"> <img src={imgAppel}  /></p>
<p className="image"> <img src={imgRtx}  /></p>
<p>Spheretracing expands this idea by a signed distance function, which returns the minimal distance from a certain point to any geometric shapes in the scene. </p>

<p className="image"> <img src={imgSdf}  /></p>

<p>This has two implications. First we can 'march' step by step into the scene without accidentally bumping into anything, as guranteed by the SDF.</p> 

<p className="image"> <img src={imgMarch2}  /></p>
<p>Secondly we can calculate the surface normals by the gradient of SDF!</p>
<p className="image"> <img src={imgMarch4}  /></p>
<p>The downside is that it's prone to numerical errors. Not that I do not appreciate green sunrise on the striped desert. </p>

<p className="image"> <img src={imgBug3}  /></p>
<p>Alright, now apply everything you've learned about spheretracing to the hyperbolic space. The last piece of the puzzle is some realistic lighting.</p>
<p>We'll use the classic Phong shading. Essentially Lighting information is divided into ambient, diffuse and specular. </p>
<p className="image"> <img src={imgAmbient}  /></p>
<p className="image"> <img src={imgDiffuse}  /></p>
<p className="image"> <img src={imgSpecular}  /></p>
<p className="image"> <img src={imgCombined}  /></p>
<p>Now we can do whatever we want with the space, even generating a maze! See the picture below, you'll find five rooms centered around the same corner instead of four.</p>
<p className="image"> <img src={imgMaze}  /></p>
<p>Finally the code as promised. </p>
<p><bold> ⬇ OPEN WITH CAUTION! IT MIGHT CRASH YOUR BROWSER! ⬇ </bold> </p>
<p><a href="https://qwertyqwh.github.io/Raymarching-Hyperbolic-Geometry"> https://qwertyqwh.github.io/Raymarching-Hyperbolic-Geometry/</a></p>

                <div>
        <Tex2SVG display  latex={ascii} />
                </div>

					


    </>
}