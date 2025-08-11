import React from "react";
import CustomErrorPage from "./CustomErrorPage";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("App crashed with error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <CustomErrorPage />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
