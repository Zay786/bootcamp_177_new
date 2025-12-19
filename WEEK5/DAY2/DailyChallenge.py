class Farm:
    def __init__(self, farm_name):
        """Initialize the farm with a name and an empty animals dictionary"""
        self.name = farm_name
        self.animals = {}

    def add_animal(self, **kwargs):
        """
        Add or update animals using keyword arguments.
        Example: farm.add_animal(cow=5, sheep=2)
        """
        for animal, count in kwargs.items():
            if animal in self.animals:
                self.animals[animal] += count
            else:
                self.animals[animal] = count

    def get_info(self):
        """Return a formatted string showing the farm info and animals"""
        info_lines = [f"{self.name}'s farm\n"]
        for animal, count in self.animals.items():
            info_lines.append(f"{animal} : {count}")
        info_lines.append("\n    E-I-E-I-0!")
        return "\n".join(info_lines)

    def get_animal_types(self):
        """Return a sorted list of animal types"""
        return sorted(self.animals.keys())

    def get_short_info(self):
        """
        Return a short description of the farm like:
        "McDonald's farm has cows, goats and sheeps."
        """
        types = self.get_animal_types()
        formatted_animals = []
        for animal in types:
            name = animal if self.animals[animal] == 1 else animal + 's'
            formatted_animals.append(name)
        
        if len(formatted_animals) > 1:
            short_desc = ", ".join(formatted_animals[:-1]) + " and " + formatted_animals[-1]
        else:
            short_desc = formatted_animals[0]
        
        return f"{self.name}'s farm has {short_desc}."

macdonald = Farm("McDonald")

macdonald.add_animal(cow=5, sheep=2, goat=12)
print(macdonald.get_info())

print(macdonald.get_animal_types())
print(macdonald.get_short_info())
