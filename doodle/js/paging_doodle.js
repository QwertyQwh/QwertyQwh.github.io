$('#pagination').twbsPagination({
    totalPages: 1,
    // the current page that show on start
    startPage: 1,
  
    // maximum visible pages
    visiblePages: 1,
  
    initiateStartPageClick: true,
  
    
  
    // variable name in href template for page number
    hrefVariable: '{{number}}',
  
    // Text labels
    first: 'First',
    prev: 'Previous',
    next: 'Next',
    last: 'Last',
  
    // carousel-style pagination
    loop: false,
  
    // callback function
    onPageClick: function (event, page) {
      $('.page-active').removeClass('page-active');
      $('#page'+page).addClass('page-active');
      window.location.href = "#main";
    },
  
    // pagination Classes
    paginationClass: 'pagination',
    nextClass: 'actions',
    prevClass: 'actions',
    lastClass: 'actions',
    firstClass: 'actions',
    pageClass: 'actions',
    activeClass: 'active',
    disabledClass: 'disabled',
  anchorClass:'button large previous'
  });