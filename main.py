class Calculator:
    def __init__(self):
        self.result = 0

    def add(self, x, y):
        self.result = x + y

    def subtract(self, x, y):
        self.result = x - y

    def multiply(self, x, y):
        self.result = x * y

    def divide(self, x, y):
        if y == 0:
            raise ValueError("Division by zero is not allowed.")
        self.result = x / y

    def get_result(self):
        return self.result
