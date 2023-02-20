export default function validate({ user_id, user_pwd }) {
    const error = {};

    if (!user_id) {
        error.user_id = "아이디를입력하세요.";
    }
    if (!user_pwd) {
        error.user_pwd = "비밀번호를입력하세요.";
    }

    return error;
}