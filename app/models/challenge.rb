class Challenge < ApplicationRecord
  validates :objective, presence: true, length: { maximum: 50 }
  validates :description, presence: true, length: { maximum: 250 }
  validates :deadline, presence: true, format: { with: %r{\A\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])\z}, message: 'Not a valid date' }
  validates :time, presence: true, numericality: true
  validates :points, presence: true, numericality: { only_integer: true }
  validates :status, presence: true, inclusion: ['En curso', 'Pendiente', 'Aprobado', 'Rechazado', 'Expirado']
  validates :assigned, presence: true
  validates :rating, presence: true, numericality: { only_integer: true }, comparison: { greater_than: -1, less_than: 6 }
end
