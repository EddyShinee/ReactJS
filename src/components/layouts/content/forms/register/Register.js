import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


class Register extends Component {

    showName = () => {
        console.log(this.refs.name.value);

    }
    render() {
        return (
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="card">
                        <div className="card-header bg-warning text-white">
                            <h2 className="card-title ">Đăng ký thành viên</h2>
                        </div>
                        <div className="card-body">

                            <form>
                                <div className="form-group">
                                    <label>Tên đăng nhập</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tên đăng nhập" />
                                </div>
                                <div className="form-group">
                                    <label>Họ và tên</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Họ và tên" />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập email" />
                                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>
                                <div className="form-group">
                                    <label>Mật khẩu</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mật khẩu" />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label">Nhận email khi có khuyến mãi mới</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Đăng ký</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>

        );
    }
}
export default Register;


