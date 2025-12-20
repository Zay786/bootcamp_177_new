class Human:
    def __init__(self, id_number, name, age, priority=False, blood_type="O"):
        self.id_number = id_number
        self.name = name
        self.age = age
        self.priority = priority
        self.blood_type = blood_type
        self.family = []

    def add_family_member(self, person):
        if person not in self.family:
            self.family.append(person)
        if self not in person.family:
            person.family.append(self)

    def __str__(self):
        return f"{self.name} ({self.age} y, {self.blood_type}, priority={self.priority})"

    def __repr__(self):
        return str(self)


class Queue:
    def __init__(self):
        self.humans = []

    # Add person with priority check
    def add_person(self, person):
        if person.age > 60 or person.priority:
            # Insert at beginning manually
            self.humans = [person] + self.humans
        else:
            self.humans = self.humans + [person]

    # Find human index
    def find_in_queue(self, person):
        for i in range(len(self.humans)):
            if self.humans[i] == person:
                return i
        return -1

    # Swap two humans
    def swap(self, person1, person2):
        idx1 = self.find_in_queue(person1)
        idx2 = self.find_in_queue(person2)
        if idx1 != -1 and idx2 != -1:
            temp = self.humans[idx1]
            self.humans[idx1] = self.humans[idx2]
            self.humans[idx2] = temp

    # Get next person and remove from list
    def get_next(self):
        if len(self.humans) == 0:
            return None
        person = self.humans[0]
        # Remove manually without pop
        new_list = []
        for i in range(1, len(self.humans)):
            new_list.append(self.humans[i])
        self.humans = new_list
        return person

    # Get next human with specific blood type
    def get_next_blood_type(self, blood_type):
        for i in range(len(self.humans)):
            if self.humans[i].blood_type == blood_type:
                person = self.humans[i]
                # Remove manually
                new_list = []
                for j in range(len(self.humans)):
                    if j != i:
                        new_list.append(self.humans[j])
                self.humans = new_list
                return person
        return None

    # Sort by priority, then older, then younger
    def sort_by_age(self):
        new_queue = []
        # Add priority first
        for human in self.humans:
            if human.priority:
                new_queue.append(human)
        # Then older people (>60)
        for human in self.humans:
            if not human.priority and human.age > 60:
                new_queue.append(human)
        # Then remaining younger people
        for human in self.humans:
            if not human.priority and human.age <= 60:
                new_queue.append(human)
        self.humans = new_queue

    # Rearrange queue so family members not together
    def rearrange_queue(self):
        if len(self.humans) < 2:
            return
        i = 0
        while i < len(self.humans) - 1:
            current = self.humans[i]
            next_person = self.humans[i+1]
            # Check if they share family
            shared_family = False
            for member in current.family:
                if member == next_person:
                    shared_family = True
                    break
            if shared_family:
                # Try to find someone else to swap
                swapped = False
                for j in range(i+2, len(self.humans)):
                    candidate = self.humans[j]
                    # Candidate should not be family of current
                    if candidate not in current.family:
                        # Swap next_person with candidate
                        temp = self.humans[i+1]
                        self.humans[i+1] = self.humans[j]
                        self.humans[j] = temp
                        swapped = True
                        break
                if not swapped:
                    # Cannot swap, move on
                    i += 1
                else:
                    # Swapped, recheck at same index
                    continue
            i += 1


alice = Human("001", "Alice", 65, True, "A")
bob = Human("002", "Bob", 30, False, "B")
carol = Human("003", "Carol", 25, False, "O")
dave = Human("004", "Dave", 70, False, "AB")
eve = Human("005", "Eve", 28, False, "O")

alice.add_family_member(bob)
carol.add_family_member(eve)

q = Queue()
q.add_person(alice)
q.add_person(bob)
q.add_person(carol)
q.add_person(dave)
q.add_person(eve)

print("Initial queue:")
print(q.humans)

q.sort_by_age()
print("\nQueue after sorting by age and priority:")
print(q.humans)

next_person = q.get_next()
print("\nNext person for vaccination:", next_person)

blood_type_person = q.get_next_blood_type("O")
print("\nNext person with blood type O:", blood_type_person)

print("\nQueue before rearranging family members:")
print(q.humans)

q.rearrange_queue()
print("\nQueue after rearranging family members:")
print(q.humans)
