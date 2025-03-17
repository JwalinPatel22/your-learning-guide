<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

  <title>Login</title>

  <style>
    body, html {
      height: 100%;
      margin: 0;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .form-container {
      width: 90%;
      max-width: 400px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-color: #f8f9fa;
    }

    .form-container h2 {
      margin-bottom: 20px;
    }

    .form-container .form-group {
      margin-bottom: 15px;
    }
  </style>  
</head>

<body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

  <div class="container">
    <div class="form-container">
      <h2 class="text-center">Login</h2>

      <!-- Display error message if exists -->
      <?php if (isset($_GET['error'])): ?>
        <div class="alert alert-danger" role="alert">
          Invalid username or password.
        </div>
      <?php endif; ?>

      <form action="db_login.php" method="post">
        <div class="mb-3">
          <label for="uname" class="form-label">User Id</label>
          <input type="text" class="form-control" id="uname" name="uname" required>
        </div>
        <div class="mb-3">
          <label for="pass" class="form-label">Password</label>
          <input type="password" class="form-control" id="pass" name="pass" required>
        </div>
        <button type="submit" class="btn btn-success w-100" name="login">Login</button>
        <div class="mt-3 text-center">
        <a href="user-Registration.html" class="green-link">Sign Up</a>

        </div>
      </form>
    </div>
  </div>
</body>

</html>
