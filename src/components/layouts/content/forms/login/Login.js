import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


class Login extends Component {

    showName = () => {
        console.log(this.refs.name.value);

    }
    render() {
        return (
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h2 className="card-title ">Đăng nhập thành viên</h2>
                        </div>
                        <div className="card-body">
                            {/* <form> */}
                            <div className="form-group">
                                <label >Địa chỉ email / Tên đăng nhập</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" ref="name" aria-describedby="emailHelp" placeholder="Nhập email hoặc tên đăng nhập" />
                                <small id="emailHelp" className="form-text text-muted">Chúng tôi sẽ không cung cấp email cho người khác như facebook.</small>
                            </div>
                            <div className="form-group">
                                <label>Mật khẩu</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mật khẩu" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label">Ghi nhớ</label>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.showName}>Đăng nhập</button>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>

        );
    }
}
export default Login;


