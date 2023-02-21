/**
 * información que quiero insertar
 */

interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string
  status: string
  createAt: number
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        'Pendiente: Duis eu dolore est magna deserunt magna nulla aliquip ea non aute ut.',
      status: 'pending',
      createAt: Date.now(),
    },
    {
      description:
        'En Progreso: Voluptate labore elit est adipisicing sint cupidatat est velit aliqua deserunt.',
      status: 'in-progress',
      createAt: Date.now() - 1000000,
    },
    {
      description:
        'Terminada: Dolore irure est irure occaecat nostrud deserunt fugiat enim amet eiusmod magna.',
      status: 'finished',
      createAt: Date.now() - 100000,
    },
  ],
}
