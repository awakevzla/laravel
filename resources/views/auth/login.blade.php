@extends('layouts.app')

@section('content')
<div class="container" style="width: 90%;">
    <div class="row">
                    <div class="site__container">
                        <div class="col-md-8">
                            <h1 align="center">Servicio AAA</h1>
                            <p style="font-size: 25px;text-align: center;">Sistema de Autenticación, Autorización y Auditoría</p>
                        </div>
                        <div class="col-md-4">
                            <div class="grid__container">
                                <form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">
                                    {!! csrf_field() !!}
                                    <div class="form__field">
                                        <div class="input-group">
                                            <div class="input-group-addon"><i class="fa fa-user"></i></div>
                                            <input id="login__username" type="text" name="email" class="form-control" placeholder="Email">
                                        </div>
                                    </div>
                                    @if ($errors->has('email'))
                                        <span class="help-block" style="color: darkred;">
                                                <strong>{{ $errors->first('email') }}</strong>
                                            </span>
                                    @endif
                                    <div class="form__field">
                                        <div class="input-group">
                                            <div class="input-group-addon"><i class="fa fa-certificate"></i></div>
                                            <input id="login__password" type="password" name="password" class="form-control" placeholder="Clave">
                                        </div>
                                    </div>
                                    @if ($errors->has('password'))
                                        <span class="help-block" style="color: darkred;">
                                                <strong>{{ $errors->first('password') }}</strong>
                                            </span>
                                    @endif
                                    <div class="form__field">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" name="remember"> <span style="color: white;">Remember Me</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form__field">
                                        <input type="submit" value="Ingresar" class="btn btn-success">
                                        <a class="btn btn-link" href="{{ url('/password/reset') }}">¿Olvidaste la Contraseña?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
        </div>
    </div>
</div>
@endsection
