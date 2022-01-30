const apiData = { 

    

    branches : [
  
          {
  
              branch_id: 1,
  
              branchName : "Quilmes",
  
              stylists : [
  
              {
  
                  stylist_id: 4,
  
                  stylistName : "Pablo",
  
                  services : [
  
                      {
  
                          service_id: 1,
  
                          serviceName : "Corte"
  
                      },
  
                      {
  
                          service_id: 2,
  
                          serviceName : "Color"
  
                      },
  
                      {
  
                          service_id: 3,
  
                          serviceName : "Barba"
  
                      }
  
                  ]
  
              },
  
              {
  
                  stylist_id: 5,
  
                  stylistName : "Richard",
  
                  services : [
  
                      {
  
                          service_id: 2,
  
                          serviceName : "Color"
  
                      },
  
                      {
  
                          service_id: 3,
  
                          serviceName : "Barba"
  
                      }
  
                  ]
  
              },
  
              {   stylist_id: 6,
  
                  stylistName : "Jose",
  
                  services : [
  
                      {
  
                          service_id: 2,
  
                          serviceName : "Color"
  
                      }
  
                  ]
  
              }
  
          ]
  
        },
  
        {    
  
              branch_id: 2,
  
              branchName : "San Isidro",
  
              stylists : [
  
              {
  
                  stylist_id: 1,
  
                  stylistName : "Pepa",
  
                  services : [
  
                      {
  
                          service_id: 4,
  
                          serviceName : "Pedicura"
  
                      }
  
                  ]
  
              },
  
              {
  
                  stylist_id: 2,
  
                  stylistName : "Lorena",
  
                  services : [
  
                      {
  
                          service_id: 2,
  
                          serviceName : "Color"
  
                      }
  
                  ]
  
              },
  
              {
  
                  stylist_id: 3,
  
                  stylistName : "Juampi",
  
                  services : [
  
                      {
  
                          service_id: 0,
  
                          serviceName : "Nada"
  
                      }
  
                  ]
  
              }
  
          ]
  
        }
  
    ]
  
   
  
  }


    function cambia2 () {
    
    console.log(apiData)

    return apiData
    }

    