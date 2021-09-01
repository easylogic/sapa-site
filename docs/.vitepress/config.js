module.exports = {
    title: 'Sapa',
    description: 'Simple library for js application',
    ga: "UA-116150958-1",
    head: [
        [
            "script",
            {},
            `
        (function(j,en,ni,fer) {
          j['dmndata']=[];j['jenniferFront']=function(args){window.dmndata.push(args)};
          j['dmnaid']=fer;j['dmnatime']=new Date();j['dmnanocookie']=false;j['dmnajennifer']='JENNIFER_FRONT@INTG';
          var b=Math.floor(new Date().getTime() / 60000) * 60000;var a=en.createElement(ni);
          a.src='https://d-collect.jennifersoft.com/'+fer+'/demian.js?'+b;a.async=true;
          en.getElementsByTagName(ni)[0].parentNode.appendChild(a);
      }(window,document,'script','cc474308-b29c-af41-7393-409d285dca6e'));
    `
        ],
        [
            "script",
            {},
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TBTZTTR');`
        ],
        [
            'script',
            {
                async: true,
                src: "https://www.googletagmanager.com/gtag/js?id=UA-139740394-1"
            }
        ],
        [
            'script',
            {},
            `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'UA-139740394-1');
        `
        ],
    ],
    themeConfig: {
        repo: "easylogic/sapa",
        // repoLabel: 'Contribute!',
        lastUpdated: "Last Updated",
        sidebarDepth: 3,
        nav: [
            {
                text: 'Story',
                items: [
                {
                    text: 'Web Design Tool',
                    link: 'https://editor.easylogic.studio'
                },
                {
                    text: 'Gradient Editor',
                    link: 'https://gradient.easylogic.studio'
                },
                {
                    text: 'ColorPicker',
                    link: 'https://colorpicker.easylogic.studio/colorpicker/'
                }, {
                    text: 'GradientPicker',
                    link: 'https://colorpicker.easylogic.studio/gradientpicker/'
                },
                {
                    text: 'Color',
                    link: 'https://colorpicker.easylogic.studio/color/'
                },
                {
                    text: 'Image',
                    link: 'https://colorpicker.easylogic.studio/image/'
                }]
            }
        ]
    }
}