function Load_developer () {window.location="developer.html"}
function Load_index () {window.location="index.html"}
function Load_food_view () {window.location="food.html"}
function Load_chips_view () 
    {
        window.location="chips.html"
    }
function Load_piloa_view () {window.location="piloa.html"}
function Load_drinks_view () {window.location="drinks.html"}
function Load_salads_view () {window.location="salads.html"}
function Load_chicken_view () {window.location="chicken.html"}
function Load_luwombo_view () {window.location="luwombo.html"}
function Load_local_dish_view () {window.location="localdishe.html"}
function Load_break_fast_view () {window.location="breakfast.html"}
function Load_beverages_view_ () {window.location="beverages.html"}
function Load_goat_meat_view () {window.location="goatmeat.html"}
function Load_beef_liver_view () {window.location="beefliver.html"}

// function SubmitCustomerData (){document.forms["customers-order-form"].submit();setTimeout(ClearCustomerForm, seconds)}
// function ClearCustomerForm (){document.forms["customers-order-form"].reset();document.getElementById('id01').style.display='none'}


function validate_form ()
{
    let name = document.getElementById("custname");
    if (name.value.lenght == 0) alert("Name should not be empty...")
}
function display_date ()
{
    let today = new Date ();
    let date = today.getDate() +'-0'+(today.getMonth()+1)+'-'+today.getFullYear ();
    document.getElementById("date-id").innerHTML = date;
    
}
function display_date2 ()
{
    let today = new Date ();
    let date = today.getDate() +'-0'+(today.getMonth()+1)+'-'+today.getFullYear ();
    document.getElementById("date-id-2").innerHTML = date;
    
}function display_date3 ()
{
    let today = new Date ();
    let date = today.getDate() +'-0'+(today.getMonth()+1)+'-'+today.getFullYear ();
    document.getElementById("date-id-3").innerHTML = date;
    
}


// ========================================================================
// Break fast page

function Hide_All_Divs ()
{
    document.getElementById("breakfast-others-div").style.display = "none";
    // document.getElementById("breakfast-teas-coffee").style.display = "none";
    // document.getElementById("breakfast-egg-div").style.display = "none";
    // document.getElementById("food_menu_gallery_div").style.display = "none";

}

function Show_breakfast_others_div ()
{
    // document.getElementById("breakfast-egg-div").style.display = "none";
    // document.getElementById("breakfast-teas-coffee").style.display = "none";
    document.getElementById("breakfast-others-div").style.display = "block"; 
}
function Show_breakfast_egg_dishes_div ()
{
    document.getElementById("breakfast-others-div").style.display = "none";
    document.getElementById("breakfast-teas-coffee").style.display = "none";
    document.getElementById("breakfast-egg-div").style.display = "block"; 
}
function Show_breakfast_teas_coffee_div ()
{
    document.getElementById("breakfast-egg-div").style.display = "none";
    document.getElementById("breakfast-others-div").style.display = "none";
    document.getElementById("breakfast-teas-coffee").style.display = "block"; 
}

// ==============================================
// drinks page

function Hide_drinks_divs ()
{
    document.getElementById("drinks-soft-beverages-div").style.display = "none";
    // document.getElementById("drinks-fresh-fruit-div").style.display = "none";
}

function Show_drinks_soft_beverages_div ()
{
    // document.getElementById("drinks-fresh-fruit-div").style.display = "none";
    document.getElementById("drinks-soft-beverages-div").style.display = "block";
}

function Show_drinks_fresh_fruit_div ()
{
    document.getElementById("drinks-soft-beverages-div").style.display = "none";
    document.getElementById("drinks-fresh-fruit-div").style.display = "block";
}