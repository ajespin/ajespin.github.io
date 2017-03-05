
      require(["dojo/fx", "dojo/on", "dojo/dom", "dojo/domReady!"], function(fx, on, dom) {

          var wipeInButton = dom.byId("wipeInButton");
          var wipeOutButton = dom.byId("wipeOutButton");
          var  wipeTarget = dom.byId("wipeTarget");
          var wipeInButton2 = dom.byId("wipeInButton2");
          var  wipeOutButton2 = dom.byId("wipeOutButton2");
          var  wipeTarget2 = dom.byId("wipeTarget2");

                      on(wipeInButton, "click", function(evt){
                        fx.wipeIn({ node: wipeTarget }).play();
                      });
                      on(wipeOutButton, "click", function(evt){
                        fx.wipeOut({ node: wipeTarget }).play();
                      });
                      on(wipeInButton2, "click", function(evt){
                        fx.wipeIn({ node: wipeTarget2 }).play();
                      });
                      on(wipeOutButton2, "click", function(evt){
                        fx.wipeOut({ node: wipeTarget2 }).play();
                      });

      });
