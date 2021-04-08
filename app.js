function agecalc() {
    var birth_date = new Date(document.getElementById('birthday').value);
    var birthday_date_day = birth_date.getDay();
    var birthday_date_month = birth_date.getMonth();
    var birthday_date_year = birth_date.getFullYear();
    var today_date = new Date();
    var today_date_day = today_date.getDay();
    var today_date_month = today_date.getMonth();
    var today_date_year = today_date.getFullYear();
    var calculated_age = today_date_year - birthday_date_year;

    if (today_date_month > birthday_date_month) { calculated_age = today_date_year - birthday_date_year }
    else if (today_date_month === birthday_date_month) {
        if (today_date_day >= birthday_date_day) { calculated_age = today_date_year - birthday_date_year }
        else { calculated_age = today_date_year - birthday_date_year - 1 }
    }
    else { calculated_age = today_date_year - birthday_date_year - 1 }

    
    document.getElementById('calculated').innerHTML = "Your Age is : " + calculated_age + " Year";
}



