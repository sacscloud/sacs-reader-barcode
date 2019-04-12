    /**
     * `sacs-reader-barcode`
     * Reader of barcode
     *
     * @customElement
     * @polymer
     * @demo demo/index.html
     */

     'use strict';

     
    Polymer({
        is:'sacs-reader-barcode',
        properties:{},

        attached: function(){
            console.log("SI", this.$.camera);
            Quagga.init({
                inputStream : {
                  name : "Live",
                  type : "LiveStream",
                  target: this.$.camera   // Or '#yourElement' (optional)
                },
                decoder : {
                  readers : ["code_128_reader"]
                }
              }, function(err) {
                  if (err) {
                      console.log(err);
                      return
                  }
                  console.log("Initialization finished. Ready to start");
                  Quagga.start();
              });

              Quagga.onDetected(data => {

                console.log("DATA", data);

              });

            
        }

      });