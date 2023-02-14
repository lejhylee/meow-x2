import { useEffect, useState } from "react";

//React Hook 선언하기
function useForm({ initialValues, onSubmit, validate }) {
    //상태관리
    //모든 입력값과 오류메시지 그리고 제출 처리중 여부를 저장할 상태 변수와 변경 함수를 정의
    //이 Hook을 사용하는 컴포넌트에서 상태를 읽을수 있도록 리턴

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    //변경 이벤트 처리
    //양식의 모든 입력란에 발생하는 변경 이벤트 처리를 할수있는 범용함수 작성,
    //이 Hook을 사용하는 컴포넌트에서 각 입력란에 이 이벤트 핸들러를 설정할수 있도록 리턴
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }
    //제출 이벤트 처리
    //양식에서 발생하는 제출(submit) 이벤트를 처리할수 있는 함수작성
    //useEffect()를 사용해서 에러가 없을때만 인자로 넘어온 입력값을 처리하는 로직
    //이 Hook을 사용하는 컴포넌트에서 제출 버튼에 이 이벤트 랜들러를 설정할수 있도록 리턴
    const handleSubmit = async (event) => {
        setSubmitting(true);
        event.preventDefalut();
        await new Promise((r) => setTimeout(r, 1000));
        setErrors(validate(values));
    }

    useEffect(() => {
        if (submitting) {
            if (Object.keys(errors).length === 0) {
                onSubmit(values);
            }
            setSubmitting(false);
        }
    }, [errors]);
    
    return {
        values,
        errors,
        submitting,
        handleChange,
    }
}
export default useForm;