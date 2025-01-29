const iconAccount = document.querySelector(".icon-account");
const boxAccount = document.querySelector(".box-account");

console.log(iconAccount, boxAccount);

iconAccount.addEventListener('click', function() {
    console.log(iconAccount, boxAccount);
    boxAccount.classList.toggle('active');
});
