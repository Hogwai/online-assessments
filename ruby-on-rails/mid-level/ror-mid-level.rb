require 'net/http'
require 'uri'
require 'json'

uri = URI('https://coderbyte.com/api/challenges/json/age-counting')
response = Net::HTTP.get(uri)

if response
  data = JSON.parse(response)
  items = data['data'].split(', ')

  count = 0
  items.each do |item| 
    key_value, age_value = item.split('=')
    age = age_value.to_i
    if age >= 50 && key_value == 'age'
      count += 1
      #puts "#{key_value}: #{age_value}"
    end
  end

  output = count.to_s + "cf712g3yd8e"

  (2..output.length).step(3) do |i|
    output[i] = 'X' if i < output.length
  end

  puts output
else
  puts "Error while querying."
end