<?php


namespace App\Http\Controllers;
use App\Models\Book;
use Illuminate\Http\Request;


class BookController extends Controller
{

    public function index(){
        return response()->json(Book::all());
    }

    public function create(Request  $request){
        $book = new Book();
        $book->fill($request->all());
        $book->save();
        return response()->json($book);
    }

    public function show($id){
        return response()->json(Book::find($id));
    }

    public function update(Request $request, $id){
        $book = Book::find($id);
        $book->title = $request->input('title');
        $book->description = $request->input('description');
        $book->date_publish = $request->input('date_publish');
        $book->author = $request->input('author');
        $book->save();
        return response()->json($book);
    }

    public function destroy($id){
        $book = Book::find($id);
        $book->delete();
        return response()->json('book removed');
    }

}
