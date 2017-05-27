$(function() {

  /* Build new ShopifyBuy client
  ============================================================ */
  var client = ShopifyBuy.buildClient({
    accessToken: '7e1bf50daa78320fc6039e40af19644d',
    domain: 'chefsocial.myshopify.com',
    appId: '6'
  });

  /* Fetch all collections and init
  ============================================================ */
  client.fetchAllCollections()
    .then(function(collections) {
      $.each(collections, function(index, collection) {
        var attributes = collection.attrs;
        var artisan_link = '/store/'+attributes.handle.replace(/\-/g, '');
        var collection_html = '<a href="'+artisan_link+'"><div class="merchant col-md-4" collection-id="'+attributes.collection_id+'"">\
          <h4>'+ attributes.title +'</h4>\
          \
          <p>'+ attributes.body_html +'</p>\
          </div></a>';
        $('.merchants-row').append(collection_html);
      });
    }
  );
});