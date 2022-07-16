amount = int(input("How much is your total wealth over the past year?"))

if amount > 750000:
    print(0.025 * amount, "This is the amount of zakat you must pay")
else :
    print(" The value of the wealth you declared did not reach the nisab of zakat, which was estimated at 750,000 DA")
