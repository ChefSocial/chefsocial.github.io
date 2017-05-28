$(function() {

  /* Build new ShopifyBuy client
  ============================================================ */
  var client = ShopifyBuy.buildClient({
    accessToken: '7e1bf50daa78320fc6039e40af19644d',
    domain: 'chefsocial.myshopify.com',
    appId: '6'
  });

  $( document ).ready(function() {
    var collectionId = $('.collection-data').data('collection');
    client.fetchQueryProducts({ collection_id: collectionId }).then(products => {
      console.log(products);
      // $('.products').empty();
      $.each(products, function(index, prod){
        var product_link = '';
        var collection_html = '<a class="product-link" href="'+product_link+'"><div class="merchant col-md-4">\
          <h4>'+ prod.title +'</h4>\
          \
          <img class="product-image" src="'+ prod.images[0].src +'">\
          </div></a>';
        $('.merchants-row').append(collection_html);

        // var prod_listing_html = '<div class="product-listing" product-id="'+prod.id+'"">\
        //   <h4>'+ prod.title +'</h4>\
        //   </div>';
        // $('.products').append(prod_listing_html);
      });
    });
  });
});