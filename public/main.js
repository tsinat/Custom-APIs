'use strict';
$(function() {
    $('.gravatarButton').click(generateGravatar);
    $('.sentenceButton').click(analyzeSentence);
    $('.dateButton').click(checkAge);
    $('.calButtonA').click(checkSum);
    $('.calButtonS').click(checkSub);
    $('.calButtonM').click(checkMul);
    $('.calButtonD').click(checkDiv);
    $('.calButtonP').click(checkPow);

});

function generateGravatar(e) {
    var inputEmail = $('.gravatarInput').val();
    $.get(`/gravatar.com/avatar/${inputEmail}`)
        .done(function(data) {
            var div = $('<div>');
            var image = $('<img>', {
                src: '//gravatar.com/avatar/' + data
            });
            div.append(image);
            $('.container').append(div);
        })
        .fail(function(error) {
            //generate error
            console.log('error:', error);
        });

}
//count word letter and average
function analyzeSentence(e) {
    var sentenceToCheck = $('.sentenceInput').val();
    var decodedsentence = encodeURIComponent(sentenceToCheck);
    console.log('decodedsentence:', decodedsentence);
    $.get(`/sentence/${decodedsentence}`)
        .done(function(data) {
            var div = $('<div>');
            var content = $('<h3>').text(data);
            div.append(content);
            $('.sentencecontainer').append(div);
        })
        .fail(function(error) {
            //generate error
            console.log('error:', error);
        });

}
//display user age in years
function checkAge() {
    var birthdate = $('.dateInput').val();
    $.get(`/age/${birthdate}`)
        .done(function(data) {
            var div = $('<div>');
            var content = $('<h2>').text(data);
            div.append(content);
            $('.ageContainer').append(div);
        })
}
//reeturns the sum of the two numbers
function checkSum() {
    var firstNum = $('.firstNum').val();
    var secondNum = $('.secondNum').val();
    $.get(`/math/sum/${firstNum}/${secondNum}`)
        .done(function(data) {
            var div = $('<div>');
            var content = $('<h2>').text(data);
            div.append(content);
            $('.calcResult').append(div);
        })
        .fail(function(error) {
            console.log(error);
        })
}
//returns the subtraction of the two number
function checkSub() {
    var firstNum = $('.firstNum').val();
    var secondNum = $('.secondNum').val();
    $.get(`/math/sub/${firstNum}/${secondNum}`)
        .done(function(data) {
            var div = $('<div>');
            var content = $('<h2>').text(data);
            div.append(content);
            $('.calcResult').append(div);
        })
        .fail(function(error) {
            console.log(error);
        })
}
//returns multiplication of the two numbers
function checkMul() {
    var firstNum = $('.firstNum').val();
    var secondNum = $('.secondNum').val();
    $.get(`/math/mult/${firstNum}/${secondNum}`)
        .done(function(data) {
            var div = $('<div>');
            var content = $('<h2>').text(data);
            div.append(content);
            $('.calcResult').append(div);
        })
        .fail(function(error) {
            console.log(error);
        })
}
//returns division of the two numbers
function checkDiv() {
    var firstNum = $('.firstNum').val();
    var secondNum = $('.secondNum').val();
    $.get(`/math/div/${firstNum}/${secondNum}`)
        .done(function(data) {
            var div = $('<div>');
            var content = $('<h2>').text(data);
            div.append(content);
            $('.calcResult').append(div);
        })
        .fail(function(error) {
            console.log(error);
        })
}

function checkPow() {
    var firstNum = $('.firstNum').val();
    var secondNum = $('.secondNum').val();
    $.get(`/math/pow/${firstNum}/${secondNum}`)
        .done(function(data) {
            var div = $('<div>');
            var content = $('<h2>').text(data);
            div.append(content);
            $('.calcResult').append(div);
        })
        .fail(function(error) {
            console.log(error);
        })
}
