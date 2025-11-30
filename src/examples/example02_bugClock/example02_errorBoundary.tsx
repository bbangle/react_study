import React, { Component, ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
    fallback?: ReactNode;
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState>{
    constructor(props:ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error:unknown) {
        return {hasError: true};//다음 렌더링 시 fallback UI를 보여줌
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        console.log("Error caught:", error, errorInfo);

    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;