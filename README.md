# Learn Angular

This project is a hands-on guide to learning Angular, covering its core concepts from basic to advanced levels. It includes practical examples of data binding, directives, control flow, pipes, forms, and API integration.

## Project Structure

The project is organized into the following modules:

- **Data Binding**: Demonstrates how to bind data between components and the DOM.
- **Directives**: Covers attribute and structural directives for manipulating the DOM.
- **Control Flow**: Explains how to use control flow statements like `*ngIf`, `*ngFor`, and `*ngSwitch`.
- **Pipes**: Shows how to transform data in your templates using pipes.
- **Forms**: Includes examples of both template-driven and reactive forms.
- **API Integration**: Provides a step-by-step guide to integrating with RESTful APIs.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aishaker129/learn-angular.git
   ```
2. **Install the dependencies:**
   ```bash
   npm install
   ```
   This will install all the necessary packages for the project.
3. **Run the application:**
   ```bash
   ng serve
   ```
   This will start the development server and open the application in your browser at `http://localhost:4200/`.

## Available Routes

The application includes the following routes:

- `/add-emp`: Add a new employee.
- `/emp-list`: View the list of employees.
- `/data-binding`: Learn about data binding.
- `/attribute-dir`: Explore attribute directives.
- `/struc-dir`: Understand structural directives.
- `/if-else`: See how to use `*ngIf` and `*ngIfElse`.
- `/for-switch`: Learn about `*ngFor` and `*ngSwitch`.
- `/pipe`: Discover how to use pipes.
- `/form-templete`: Work with template-driven forms.
- `/reactive-form`: Create reactive forms.
- `/get-api`: Fetch data from an API.
- `/post-api`: Send data to an API.
- `/put-api`: Update data using an API.
- `/delete-api`: Delete data through an API.

## Running Tests

To run the unit tests for the project, use the following command:

```bash
ng test
```

This will launch the Karma test runner and execute the test cases.