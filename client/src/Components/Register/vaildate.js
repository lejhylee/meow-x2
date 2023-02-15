export default function validate({ houseName }) {
    const error = {};

    if (!houseName) {
        error.houseName = "이름을 입력하세요.";
    }

    return error;
}