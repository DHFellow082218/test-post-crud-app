<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">                  
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <title>Posts</title>
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-dark bg-dark mb-3">
            <a href="#" class="navbar-brand text-success font-weight-bold">Test Post App</a>
        </nav>
        <div class="container">
            <post-app-component/>
        </div>
  {{--       <div class="container">
            <post-form-component/>
        </div> --}}
    </div>
    <script src="{{asset('js/app.js')}}"></script>
</body>
</html>