"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockBookmarkRepo = void 0;
class MockBookmarkRepo {
    constructor() {
        this.bookmarks = [];
    }
    listBookmarkByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookmarks = this.bookmarks.filter((bookmark) => bookmark.userId === userId);
            return bookmarks;
        });
    }
    bookmarkCourse(courseId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBookmark = {
                courseId,
                userId,
            };
            const bookmarks = [...this.bookmarks];
            const isBookmarked = bookmarks.find((bookmark) => bookmark.courseId === courseId);
            if (isBookmarked)
                return;
            this.bookmarks.push(newBookmark);
        });
    }
}
exports.MockBookmarkRepo = MockBookmarkRepo;
//# sourceMappingURL=MockBookmarkRepo.js.map