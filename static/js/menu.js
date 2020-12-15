
// var php_src_url = "http://127.0.0.1:8000/index.php";
var src_url = "http://109.74.192.210:6060/";


function ProcedToPayments (IdDiv){document.getElementById(IdDiv).style.display='block';}

function ProcessCustomerDataSubmision (endpoint)
{
    
    $.ajax({
        data :
            {
                name : $("#custname").val(),
                food : $("#avenu").val(),
                contacts : $("#contacts").val(),
                location : $("#location").val(),
                price : $("#price-input").val(),
            },

            url : src_url + endpoint,
            type : 'POST',
            encode : true
        })
        // console.log(data);
}


function ProcessPhpCustomerDataSubmision ()
{
    email = "henry moga";
    
    $.ajax({
        data :
            {
                // paymentmethod : $("#payment-method"),
                email : email //$("#email").val(),
            },
            
            
            url : php_src_url,
            type : 'POST', 
            encode : true
        })
}

function GetAvenuePrices ( html_id, endpoint)
{
    let prices_req = new XMLHttpRequest ();
    prices_req.open('get',src_url+ endpoint,true);
    prices_req.onload = function ()
        {
            let price =  this.responseText;
            document.getElementById(html_id).innerHTML = price;
        }
        prices_req.send();
}

function existsFile(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
 }
// existsFile(src_url)


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

            // Menu Gallery
function Add_Menu_Gallery_Iframe (endpoint)
{
        document.getElementById("offline-label-div").style.display = "none";
        let MenuGalleryDiv = document.getElementById("menu-pics-div");
        let MenuIframe = document.createElement("iframe");
        MenuIframe.className = "menu-iframe";
        MenuIframe.setAttribute("src",  src_url + endpoint);
        MenuGalleryDiv.appendChild(MenuIframe); 
}

function Add_Menu_Gallery_Iframe_With_Args (offline_label,menu_divid,endpoint)
{
    document.getElementById(offline_label).style.display = "none";
    let MenuGalleryDiv = document.getElementById(menu_divid);
    let MenuIframe = document.createElement("iframe");
    MenuIframe.className = "menu-iframe";
    // MenuIframe.setAttribute("src",  src_url + endpoint);
    MenuGalleryDiv.appendChild(MenuIframe);
}


function Create_Offline_Label ()
{
    let offline_label_div = document.getElementById("offline-label-div");
    let label = document.createElement("label");
    label.innerHTML = "Your Are Offline <br> Please <br>Connect To Network"
    label.className = "Offline-Label"
    offline_label_div.appendChild(label)
}
function Create_Offline_Label_With_Argus (divid)
{
    let offline_label_div = document.getElementById(divid);
    let label = document.createElement("label");
    label.innerHTML = "Your Are Offline <br> Please <br>Connect To Network"
    label.className = "Offline-Label"
    offline_label_div.appendChild(label)
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
        // Options 
function Load_avenu_menu_options ( html_id, options_endpoint)
{
    let menu_options_req = new XMLHttpRequest ();
    menu_options_req.open('post' ,src_url + options_endpoint,true);
    menu_options_req.onload = function ()
        {
            let names = JSON.parse(this.responseText);
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let selecte_names = document.getElementById(html_id);
    menu_options_req.send(selecte_names);
}
                        

function Load_food_menu ()
{
    let food_names_req = new XMLHttpRequest ();
    food_names_req.open('post' ,src_url + 'food_menu_options',true);
    food_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText);
            let html_select_input = document.getElementById("food_options");
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let food_names = document.getElementById('food_options');
    food_names_req.send(food_names);
}
