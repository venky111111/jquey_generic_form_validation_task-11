
$(document).ready(function(){
    const a=[$('#fnameEr'),$('#snameEr'), $('#mailEr'), $('#numEr'),$('#npEr'),$('#cpEr'), $('#gnEr'), $('#dtEr'), $('#cnEr'), $('#chEr')];
    const ar=[$('#fName'), $('#sName'), $('#email'), $('#number'),$('#nPassword'),$('#cPassword'), $('#gender'), $('#dateInput'), $('#country'), $('#check')];
    $('#hs').click(function(){
        if(Fname()){
            if(Sname()){
                if(Mail()){
                    if(Number()){
                        if(Npassword()){
                            if(Cpassword()){
                                if(Gender()){
                                    if(Date()){
                                        if(Country()){
                                            if(Check()){
                                                var modal = new bootstrap.Modal($("#successModal"));
                                                modal.show();
                                            }
                                            else{
                                                for(let i=0;i<a.length-1;i++){
                                                        a[i].text('');
                                                        ar[i].css("borderColor","#d6d4d4");
                                                }
                                            }
                                        }
                                        else{
                                            for(let i=0;i<a.length;i++){
                                                if(i>8){
                                                    a[i].text('');
                                                    ar[i].css("borderColor","#d6d4d4");
                                               
                                                }
                                            }
                                        }
                                    }    
                                    else{
                                        for(let i=0;i<a.length;i++){
                                            if(i>7){
                                                a[i].text('');
                                                ar[i].css("borderColor","#d6d4d4");
                                           
                                            }
                                        }
                                    }
                                }
                                else{
                                    for(let i=0;i<a.length;i++){
                                        if(i>6){
                                            a[i].text('');
                                            ar[i].css("borderColor","#d6d4d4");
                                       
                                        }
                                    }
                                }
                            }
                            else{
                                for(let i=0;i<a.length;i++){
                                    if(i>5){
                                        a[i].text('');
                                        ar[i].css("borderColor","#d6d4d4");
                                   
                                    }
                                }
                            }
                        }
                        else{
                            for(let i=0;i<a.length;i++){
                                if(i>4){
                                    a[i].text('');
                                    ar[i].css("borderColor","#d6d4d4");
                               
                                }
                            }
                        }
                    }
                    else{
                        for(let i=0;i<a.length;i++){
                            if(i>3){
                                a[i].text('');
                                ar[i].css("borderColor","#d6d4d4");
                            }
                        }
                    }
                }
                else{
                    for(let i=0;i<a.length;i++){
                        if(i>2){
                            a[i].text('');
                            ar[i].css("borderColor","#d6d4d4");
                       
                        }
                    }
                }
            }
            else{
                for(let i=0;i<a.length;i++){
                    if(i>1){
                        a[i].text('');
                        ar[i].css("borderColor","#d6d4d4");
                   
                    }
                }
            }
        }
        else
        {
            for(let i=0;i<a.length;i++){
                if(i>0){
                    a[i].text('');
                    ar[i].css("borderColor","#d6d4d4");
    
                }
            }
        }    
    });
    function Fname(){
        var Fname=$("#fName").val();
        if(Fname===''){
            $("#fnameEr").text('Please give your first name');
            $('#fName').css("borderColor","red");
            $("#fnameSc").text('');
            return false;
        }
        else if(checkName(Fname)&&(Fname.charAt(0)>='A'&&Fname.charAt(0)<='Z')){
            $("#fnameSc").text('');
            $('#fName').css("borderColor","green");
            $("#fnameEr").text('');
            return true;
        }
        else{
            $("#fnameEr").text('Please give letters only and first letter must be capital..!');
            $("#fnameSc").text('');
            $('#fName').css("borderColor","red");
            return false;
        }
        function checkName(input) {
            let nameReg = /^[a-zA-Z]+$/;
            let valid = nameReg.test(input);
            return valid;
        }  
    }
    function Sname(){
        var Sname=$("#sName").val();
        if(Sname===''){
            $("#snameEr").text('Please give your second name');
            $("#snameSc").text('');
            $('#sName').css("borderColor","red");
            return false;
        }
        else if(checkName(Sname)){
            $("#snameSc").text('');
            $("#snameEr").text('');
            $('#sName').css("borderColor","green");
            return true;
        }
        else{
            $("#snameEr").text('Please give letters only..!');
            $("#snameSc").text('');
            $('#sName').css("borderColor","red");
            return false;
        }
        function checkName(input) {
            let nameReg = /^[a-zA-Z]+$/;
            let valid = nameReg.test(input);
            return valid;
        }

    }
    function Mail(){
        var Email=$("#email").val();
        if(Email===''){
            $("#mailEr").text('Please give your mailId');
            $("#mailSc").text('');
            $('#email').css("borderColor","red");
            return false;
        }
        else if(checkMail(Email)){
            $("#mailSc").text('');
            $("#mailEr").text('');
            $('#email').css("borderColor","green");
            return true;
        }
        else{
            $("#mailEr").text('Please give valid mail..!');
            $("#mailSc").text('');
            $('#femail').css("borderColor","red");
            return false;
        }
        function checkMail(input){
            let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                let valid = emailReg.test(input);
                    return valid;
        }
    }
    function Number(){
        var number=$("#number").val();
        if(number===''){
            $("#numEr").text('Please give your number');
            $('#number').css("borderColor","red");
            $("#numSc").text('');
            return false;
        }
        else if(checkNumber(number))
        {
            if((number.charAt(3)>='6'&&number.charAt(3)<='9')&&(number.charAt(0)=='+')&&(number.charAt(1)>='6')&&(number.charAt(1)<='9')){
                $("#numSc").text('');
                $("#numEr").text('');
                $('#number').css("borderColor","green");
                return true;
            }
            else{
                $('#numEr').text('Please give valid number...!');
                $('#number').css("borderColor","red");
                return false;
            }
            
        }
        else{
            $("#numEr").text('Please give valid number..!');
            $("#numSc").text('');
            $('#number').css("borderColor","red");
            return false;
        }
        function checkNumber(input) {
            
            let mobileReg = /^[+0-9]{13}$/;
            let valid = mobileReg.test(input);
            return valid;
        }
    }
    function Npassword(){
        var Npassword=$("#nPassword").val();
        if(Npassword===''){
            $("#npEr").text("Please Give your password");
         
            $("#nPassword").css("borderColor","red");
            return false;
        }
        else if(checkPassword(Npassword)){
            $("#nPassword").css("borderColor","green");
            $("#npEr").text('');
            return true;
        }
        else{
            $("#npEr").text('Password should contain one number,one capital letter,one small letter,one symbol and atleast 8 characters..!');
            $("#nPassword").css("borderColor","red");
            return false;
        }
        function checkPassword(input) {
            let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            let valid = regex.test(input);
            return valid;
        }
    }
    function Cpassword(){
        var Npassword=$("#nPassword").val();
        var Cpassword=$("#cPassword").val();
        if(Cpassword===''){
            $("#cpEr").text("Please conform your password");
         
            $("#cPassword").css("borderColor","red");
            return false;
        }
        else if(Npassword===Cpassword){
            $("#cPassword").css("borderColor","green");
            $("#cpEr").text('');
            return true; 
        }
        else{
            $("#cpEr").text('password does not match...!');
            $("#cPassword").css("borderColor","red");
            return false;
        }
    }
    function Gender(){
        var Gender=document.querySelector('input[name="fav"]:checked'); 
        if(Gender===null){
            $("#gnEr").text('Please give your answer');
            $("#gnSc").text('');
            $('#gender').css("borderColor","red");
            return false;
        }
        else{
            $("#gnSc").text('');
            $("#gnEr").text('');
            $('#gender').css("borderColor","green");
            return true;
        }  
    }
    function Date(){
        var Date=$("#dateInput").val();
        if(Date===''){
            $('#dateInput').css("borderColor","red");
            $("#dtEr").text('Please give your date of birth');
            $("#dtSc").text('');
            return false;
        }
        else{
            $('#dateInput').css("borderColor","green");
            $("#dtSc").text('');
            $("#dtEr").text('');
            return true;
        }    
    }
    function Country(){
        var Country=$("#country").val();
        if(Country===null){
            $("#cnEr").text('Please give your country');
            $("#cnSc").text('');
            $('#country').css("borderColor","red");
            return false;
        }
        else{
            $("#cnSc").text('');
            $("#cnEr").text('');
            $('#country').css("borderColor","green");
            return true;
        }     
    }
    function Check(){
        var checkinput = $('input[type="checkbox"]:checked').val();
        if(checkinput!=undefined){
            $('#check').css("borderColor","green");
            $("#chSc").text('');
            $("#chEr").text('');
            return true;
        }
        else{
            $('#check').css("borderColor","red");
            $("#chEr").text('Please give your conformation');
            $("#chSc").text('');
            return false;
        }
    }
});