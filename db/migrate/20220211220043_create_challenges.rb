class CreateChallenges < ActiveRecord::Migration[7.0]
  def change
    create_table :challenges do |t|
      t.string :objective
      t.string :description
      t.date :deadline
      t.float :time
      t.integer :points
      t.string :status
      t.string :assigned
      t.integer :rating

      t.timestamps
    end
  end
end
