import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Оновити стан з тим, щоб наступний рендер показав запасний UI.

    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
     // Можна також зберегти інформацію про помилку у відповідну службу журналу помилок
    // this.setState({ hasError: true });
  // }

  render() {
    if (this.state.hasError) {
      // Можна відрендерити запасний UI довільного вигляду
      return <h1>Щось пішло не так...</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;