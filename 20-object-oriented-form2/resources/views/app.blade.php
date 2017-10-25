<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>some title</title>
    <link rel="stylesheet" href="https://ehd4.f3322.net/youtube/bulma060/bulma.css">
</head>
<body>
    <div id="app" class="container">
        @yield('content')
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.2/vue.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.0/axios.min.js"></script>
    <script src="{{asset('js/abb.js')}}"></script>
</body>
</html>
