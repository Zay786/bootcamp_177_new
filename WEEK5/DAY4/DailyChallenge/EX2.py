import random

class Gene:
    def __init__(self, value=None):
        self.value = value if value in (0, 1) else random.randint(0, 1)

    def mutate(self):
        # Flip the gene
        self.value = 1 if self.value == 0 else 0

    def __str__(self):
        return str(self.value)


class Chromosome:
    def __init__(self):
        self.genes = [Gene() for _ in range(10)]

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5:  # 50% chance to flip
                gene.mutate()

    def is_all_ones(self):
        return all(gene.value == 1 for gene in self.genes)

    def __str__(self):
        return "".join(str(gene) for gene in self.genes)

class DNA:
    def __init__(self):
        self.chromosomes = [Chromosome() for _ in range(10)]

    def mutate(self):
        for chromosome in self.chromosomes:
            if random.random() < 0.5:
                chromosome.mutate()

    def is_all_ones(self):
        return all(chromosome.is_all_ones() for chromosome in self.chromosomes)

    def __str__(self):
        return "\n".join(str(chromosome) for chromosome in self.chromosomes)

class Organism:
    def __init__(self, dna, environment):
        self.dna = dna
        self.environment = environment  # probability of mutation

    def mutate(self):
        if random.random() < self.environment:
            self.dna.mutate()

    def has_perfect_dna(self):
        return self.dna.is_all_ones()


organism = Organism(DNA(), environment=0.4)

generation = 0

while not organism.has_perfect_dna():
    organism.mutate()
    generation += 1

print("Perfect DNA achieved!")
print(f"Generations needed: {generation}")
