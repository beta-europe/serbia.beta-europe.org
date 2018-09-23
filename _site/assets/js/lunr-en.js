var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  

  
  
    idx.add({
      title: "Simulation of European Politics",
      excerpt: "Our Association The Bringing Europeans Together Association Slovakia (BETA Slovakia) is a young, politically independent and non-profit association founded in...",
      categories: [],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "About us ",
      excerpt: "BETA Italia is a no-profit association born in 2016 as a national branch of Bringing Europeans Together Association e.V. Our...",
      categories: [],
      tags: [],
      id: 1
    });
    
  
    idx.add({
      title: "Contact",
      excerpt: "Become a Member Do you want to join BETA Italia? Fill out this form and become a member of our...",
      categories: [],
      tags: [],
      id: 2
    });
    
  
    idx.add({
      title: "Our Partners",
      excerpt: "The network of BETA Europe is strong thanks to its partners. #FreeInterrail Moving Europe Forward Associazione Giovani nel mondo L’Associazione...",
      categories: [],
      tags: [],
      id: 3
    });
    
  
    idx.add({
      title: "Projects",
      excerpt: "Projects carried out by BETA Italia\n",
      categories: [],
      tags: [],
      id: 4
    });
    
  
    idx.add({
      title: "Signature Generator",
      excerpt: "The following tool is ment for BETA members to generate a standard-compliant email signature. Generate Signature: Forum username: Phone: Generate...",
      categories: [],
      tags: [],
      id: 5
    });
    
  

  
  
    idx.add({
      title: "#FreeInterrail Moving Europe Forward",
      excerpt: "\n\n#FreeInterrail - provide EU youth with access to Interrail passes, raise mobility, combat nationalism, strengthen Europe.\n\n\n",
      categories: [],
      tags: [],
      id: 6
    });
    
  
    idx.add({
      title: "Associazione Giovani nel mondo",
      excerpt: "L’Associazione Giovani nel Mondo è nata nel 2009 con lo scopo di promuovere gli scambi culturali tra giovani studenti interessati...",
      categories: [],
      tags: [],
      id: 7
    });
    
  
    idx.add({
      title: "Bringing Europeans Together Association",
      excerpt: "BETA is a politically independent and non-profit association founded in Germany in 2008. Our name stands for Bringing Europeans Together...",
      categories: [],
      tags: [],
      id: 8
    });
    
  
    idx.add({
      title: "March for Europe",
      excerpt: "March for Europe took place on March 25th in Rome, on the 60th anniversary of the signature of the Treaty...",
      categories: [],
      tags: [],
      id: 9
    });
    
  
    idx.add({
      title: "Model European Union Trento ",
      excerpt: "Model European Union Trento (MEU Trento) is an independent, non-profit youth organization based in Trento, established in the summer of...",
      categories: [],
      tags: [],
      id: 10
    });
    
  
    idx.add({
      title: "Our Country? Europe",
      excerpt: "WHO WE ARE The two original founders, Rausten and Shep, were best friends in high school, with their fair share...",
      categories: [],
      tags: [],
      id: 11
    });
    
  

  
  
    idx.add({
      title: "Welcome to Jekyll!",
      excerpt: "You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your...",
      categories: ["jekyll","update"],
      tags: [],
      id: 12
    });
    
  

  
  
    idx.add({
      title: "Extended Board",
      excerpt: "\n",
      categories: [],
      tags: [],
      id: 13
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
  
    
    
    
      
      {
        "title": "Simulation of European Politics",
        "url": "http://localhost:4000/",
        "excerpt": "Our Association The Bringing Europeans Together Association Slovakia (BETA Slovakia) is a young, politically independent and non-profit association founded in...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "About us ",
        "url": "http://localhost:4000/about/",
        "excerpt": "BETA Italia is a no-profit association born in 2016 as a national branch of Bringing Europeans Together Association e.V. Our...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Contact",
        "url": "http://localhost:4000/contact/",
        "excerpt": "Become a Member Do you want to join BETA Italia? Fill out this form and become a member of our...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Our Partners",
        "url": "http://localhost:4000/partner/",
        "excerpt": "The network of BETA Europe is strong thanks to its partners. #FreeInterrail Moving Europe Forward Associazione Giovani nel mondo L’Associazione...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Projects",
        "url": "http://localhost:4000/projects/",
        "excerpt": "Projects carried out by BETA Italia\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Signature Generator",
        "url": "http://localhost:4000/signature-generator/",
        "excerpt": "The following tool is ment for BETA members to generate a standard-compliant email signature. Generate Signature: Forum username: Phone: Generate...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
      
      {
        "title": "#FreeInterrail Moving Europe Forward",
        "url": "http://localhost:4000/partner/-freeinterrail-moving-europe-forward/",
        "excerpt": "\n\n#FreeInterrail - provide EU youth with access to Interrail passes, raise mobility, combat nationalism, strengthen Europe.\n\n\n",
        "teaser":
          
            "http://localhost:4000/assets/images/Logo%20mit%20Schrift.jpg"
          
      },
    
      
      {
        "title": "Associazione Giovani nel mondo",
        "url": "http://localhost:4000/partner/associazione-giovani-nel-mondo/",
        "excerpt": "L’Associazione Giovani nel Mondo è nata nel 2009 con lo scopo di promuovere gli scambi culturali tra giovani studenti interessati...",
        "teaser":
          
            "http://localhost:4000/assets/images/LogoGnM.png"
          
      },
    
      
      {
        "title": "Bringing Europeans Together Association",
        "url": "http://localhost:4000/partner/bringing-europeans-together-association/",
        "excerpt": "BETA is a politically independent and non-profit association founded in Germany in 2008. Our name stands for Bringing Europeans Together...",
        "teaser":
          
            "http://localhost:4000/assets/images/beta%20europe.png"
          
      },
    
      
      {
        "title": "March for Europe",
        "url": "http://localhost:4000/partner/march-for-europe/",
        "excerpt": "March for Europe took place on March 25th in Rome, on the 60th anniversary of the signature of the Treaty...",
        "teaser":
          
            "http://localhost:4000/assets/images/march%20for%20europe.png"
          
      },
    
      
      {
        "title": "Model European Union Trento ",
        "url": "http://localhost:4000/partner/model-european-union-trento/",
        "excerpt": "Model European Union Trento (MEU Trento) is an independent, non-profit youth organization based in Trento, established in the summer of...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Our Country? Europe",
        "url": "http://localhost:4000/partner/our-country-europe/",
        "excerpt": "WHO WE ARE The two original founders, Rausten and Shep, were best friends in high school, with their fair share...",
        "teaser":
          
            "http://localhost:4000/assets/images/mycountryeurope%20logo.png"
          
      },
    
  
    
    
    
      
      {
        "title": "Welcome to Jekyll!",
        "url": "http://localhost:4000/2017/08/21/welcome-to-jekyll/",
        "excerpt": "You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
      
      {
        "title": "Extended Board",
        "url": "http://localhost:4000/team/board/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
