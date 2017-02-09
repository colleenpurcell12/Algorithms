Hash Tables
insertion deletion and lookup

takes a key and returns a hash value/record
use same way to store the keys as you would to find them
Collision: is when two keys hash to the same index
	linear probing-- stored at next available index, clustering is a problem when it fills up nearby index
	separate chaining: the items with the same index are stored there as an array of pointers, linked list O(n/k) which is like O(n)

Hash functions
	should use all info of key, like all the characters of the string
	spread output across table
	maps similar keys to very diff hash values
	employs fast operations


Advantages:
	random access without iterating across
