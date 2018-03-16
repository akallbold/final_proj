class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :picture
      t.string :google_id

      t.timestamps
    end
  end
end
