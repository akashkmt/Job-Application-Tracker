var bookmarkedJobs=JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];

function displayData(bookmarkedJobs){
    document.querySelector('#tableBody').innerHTML='';
    bookmarkedJobs.forEach(function (job,index){
        var row=document.createElement('tr');
        
        var td1=document.createElement('td');
        td1.innerText=job.company;

        var td2=document.createElement('td');
        td2.innerText=job.name;

        var td3=document.createElement('td');
        td3.innerText=job.email;

        var td4=document.createElement('td');
        td4.innerText=job.role;

        var td5=document.createElement('td');
        td5.innerText=job.salary;

        var td6=document.createElement('td');
        td6.innerText = 'Remove';
        td6.style.color = 'blue';
        td6.style.cursor = 'pointer';

        td6.addEventListener('click',function(){
            bookmarkedJobs.splice(index,1);
            localStorage.setItem('bookmarkedJobs',JSON.stringify(bookmarkedJobs));
            alert('Removed Successfully');
            window.location.reload();
        })
        row.append(td1, td2, td3, td4, td5, td6);
        document.querySelector('#tableBody').append(row);
    });
}

window.addEventListener('load', function() {
    displayData(bookmarkedJobs);
});