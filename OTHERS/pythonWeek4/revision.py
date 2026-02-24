class Car:
    def __init__(self,colour="white"):
        self.mileage = 0
        self.colour = colour
        print(f"Creating a {colour} car with mileage {self.mileage} km")
    
    def crash(self, othercar):
        print(f"{self.colour} car has crashed with {othercar.colour} car")

class PoliceCar(Car):
    pass

# we want police cars to be blue by default
zaynahcar = Car()
policecar1 = PoliceCar()