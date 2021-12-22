import { useState } from "react";

import setQuestions from "../utils/setQuestions";

const useSetQuestion = () => {
  const [state, setState] = useState({
    success: false,
    loading: false,
  });

  const handleSetState = ({ key, value }) =>
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));

  const handleSetQuestions = async () => {
    handleSetState({ key: "loading", value: true });

    await setQuestions();

    handleSetState({ key: "loading", value: false });
    handleSetState({ key: "success", value: true });
  };

  return {
    isLoading: state.loading,
    isSuccess: state.success,
    handleSetQuestions,
  };
};

export default useSetQuestion;
