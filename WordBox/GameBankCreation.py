import json

with open('wordbank3.txt', 'r') as f_in:
	data_in = f_in.read()
	wordbank3 = data_in.replace('\n', ' ').split(" ")

f_in.close()

combbank3 = []

for word1 in wordbank3:
	for word2 in wordbank3:
		for word3 in wordbank3:
			if (word1[0] + word2[0] + word3[0]) in wordbank3 and \
			(word1[1] + word2[1] + word3[1]) in wordbank3 and \
			(word1[2] + word2[2] + word3[2]) in wordbank3:
				wordlist = [word1, word2, word3, word1[0] + word2[0] + word3[0], word1[1] + word2[1] + word3[1], word1[2] + word2[2] + word3[2]]
				if (len(set(wordlist)) == len(wordlist)):
					combbank3.append([word1, word2, word3])

with open('gamebank3.js', 'w', encoding='utf-8') as f_out:
    json.dump(combbank3, f_out, ensure_ascii=False, indent=4)

f_out.close()