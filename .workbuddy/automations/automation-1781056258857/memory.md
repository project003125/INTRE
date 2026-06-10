# 网站教材自动同步 — 执行历史

## 2026-06-10 10:55

- **脚本:** `scripts/sync_chapters.py`
- **结果:** 30 个章节更新（29 章正文 + app-g 附录G），13 个附录未变更
- **Commit:** `a5c080f` — `auto: sync textbook from vault — 30 chapters updated`（33 files changed）
- **Push:** 初始失败（DNS 污染 + 网络 + PAT 权限），12:49 修复后推送成功
- **注意:** git push 需 classic PAT（`ghp_*` 含 `repo` 范围），fine-grained PAT 即使设 Contents RW 仍可能 403
