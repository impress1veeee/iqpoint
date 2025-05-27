var file = "sometextfile.txt";
 
writeTextFile(file, "Spoon")
writeTextFile(file, "Cheese monkey")
writeTextFile(file, "Onion")
 
function writeTextFile(afilename, output)
{
  var txtFile =new File(afilename);
  txtFile.writeln(output);
  txtFile.close();
}