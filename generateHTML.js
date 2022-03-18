const managerFolder = require("./titlefolder/manager")

const generatePage = page => {
const teamPage = page.map(member => {
    return '               
     <div class="p-4 bg-blue-200">
    <div class="card h-75">
        <div class="card-header">
<h3>${managerFolder.name}</h3>
<p style="font-size:50px">&#129409;</p>
<h4> Manager</h4>
</div>
<div class="card">
    <h4 class="id">${managerFolder.id} </h4>4223
    <h4 class="email">Email: <a href="mailto:${manager.email}"> ${managerFolder.email}</a></h4>
    <h4 class="office">${managerFolder.officeN}</h4>
</div>

</div>
</div>
})
}; 

const generateFullPage = function (page){

    return '
     <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Team</title>
        <link rel="stylesheet" href="style.css">
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    </head>
    <body>
        <header class="px-4 py-2 bg-blue-100">
                <h1 class="text-center text-3xl font-bold underline">Your Team</h1>

        </header> 
        <div class="container">
            <div class ="m-8 p-8 grid bg-blue-600 grid-cols-2 
            grid-flow-row gap-4 auto-rows-auto" id="team-row">
        
        </main>
    
    </body>
    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    </html> 
}