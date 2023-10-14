from main import Calculator

def test_calculator_add():
    calculator = Calculator()
    calculator.add(5, 3)
    assert calculator.get_result() == 8

def test_calculator_subtract():
    calculator = Calculator()
    calculator.subtract(10, 4)
    assert calculator.get_result() == 6

def test_calculator_multiply():
    calculator = Calculator()
    calculator.multiply(3, 7)
    assert calculator.get_result() == 21

def test_calculator_divide():
    calculator = Calculator()
    calculator.divide(10, 2)
    assert calculator.get_result() == 5

def test_calculator_divide_by_zero():
    calculator = Calculator()
    try:
        calculator.divide(5, 0)
    except ValueError as e:
        assert str(e) == "Division by zero is not allowed."