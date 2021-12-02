<html>
<head>

</head>
<body>
<form action="{{ route('uploadImage') }}" enctype="multipart/form-data" method="POST">
<input type="file" name="dp" />
<input name="submit" value="Upload" type="submit"/>
</form>

<img src="{{ asset('/st') }}" width="20" height="20"/>


</body>
</html>
