import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("에러 두둥등장!!");
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>에러가 발생했습니다...</div>;
    }

    return this.props.children;
  }
}
