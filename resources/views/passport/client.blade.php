<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Clientes</title>
</head>
<body>
    <span>Route web.php: "{{ route('index-client') }}"</span>
    <br>
    <form action="{{ url('oauth/clients') }}" method="POST">
        <p>
            <input type="text" name="name" id="name">
        </p>
        <p>
            <input type="text" name="redirect" id="redirect">
        </p>
        <p>
            <input type="submit" name="send" value="Enviar">
        </p>
        {{ csrf_field() }}
    </form>

    <table style="border:1px" border="1">
        <tbody>
            <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>REDIRECT</td>
                <td>SECRET</td>
            </tr>
            @foreach($clients as $client)
                <tr>
                    <td>{{ $client->id }}</td>
                    <td>{{ $client->name }}</td>
                    <td>{{ $client->redirect }}</td>
                    <td>{{ $client->secret }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>