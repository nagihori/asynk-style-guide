---
title: Obsidian+Gitプラグインでの403エラーの解決
---
ググったら簡単に解決できたよ。

[**Git Plugin Obsidian Android** - reddit](https://www.reddit.com/r/ObsidianMD/comments/zj5629/git_plugin_obsidian_android/?rdt=64840)
> Turns out the problem was with my personal token as I was generating a "Fine grain token" which is a beta feature.
> 
> After I generated a "Token(classic)" everything worked as expected.

認証に「Fine grain token」で生成したキーを使っていたのだけど、「Token(classic)」のほうにしたらpushできた。

## このブログ
Obsidianでのmd編集とかGit commitと自動デプロイとか試してみたかっただけなのでメモ的にふざけた口調で書いてるけど考えてみたらベーシック認証もなにもかけてないので全世界に公開されてるね。
単なるスタイルガイドのおまけなのでそのうち消すか書き直すよ。