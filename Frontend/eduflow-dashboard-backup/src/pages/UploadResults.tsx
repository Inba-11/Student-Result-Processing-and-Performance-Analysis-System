import { useState } from "react";
import { Upload, FileSpreadsheet, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const previewData = [
  { id: 1, name: "Alice Johnson", subject: "Mathematics", score: 92, status: "valid" },
  { id: 2, name: "Bob Smith", subject: "Mathematics", score: 88, status: "valid" },
  { id: 3, name: "Carol Williams", subject: "Mathematics", score: 105, status: "error" },
  { id: 4, name: "David Brown", subject: "Mathematics", score: 76, status: "valid" },
];

export default function UploadResults() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setShowPreview(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setShowPreview(true);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Upload Results</h1>
        <p className="text-muted-foreground">
          Import student scores and grades via CSV file
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* File Upload */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle>Upload File</CardTitle>
              <CardDescription>
                Drag and drop a CSV file or click to browse
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 rounded-full bg-muted">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {file ? file.name : "Drop your CSV file here"}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      or click to browse from your computer
                    </p>
                  </div>
                  <Input
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <Label htmlFor="file-upload">
                    <Button variant="outline" asChild>
                      <span>Browse Files</span>
                    </Button>
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Manual Entry */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle>Manual Entry</CardTitle>
              <CardDescription>
                Enter individual student scores manually
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="student">Student Name</Label>
                  <Input id="student" placeholder="Enter student name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="cs">Computer Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="score">Score</Label>
                  <Input id="score" type="number" placeholder="0-100" min="0" max="100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-score">Max Score</Label>
                  <Input id="max-score" type="number" placeholder="100" defaultValue="100" />
                </div>
              </div>
              <Button className="w-full sm:w-auto">Add Score</Button>
            </CardContent>
          </Card>

          {/* Preview */}
          {showPreview && (
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="h-5 w-5 text-primary" />
                  Data Preview
                </CardTitle>
                <CardDescription>
                  Review the data before uploading
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {previewData.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell className="font-medium">{row.name}</TableCell>
                        <TableCell>{row.subject}</TableCell>
                        <TableCell>{row.score}</TableCell>
                        <TableCell className="text-right">
                          {row.status === "valid" ? (
                            <Badge className="bg-success/10 text-success">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Valid
                            </Badge>
                          ) : (
                            <Badge className="bg-destructive/10 text-destructive">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              Error
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4 flex gap-3">
                  <Button>Upload Valid Records</Button>
                  <Button variant="outline" onClick={() => setShowPreview(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Instructions */}
        <div>
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle>CSV Format Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Your CSV file should have the following columns:
              </p>
              <div className="bg-muted rounded-lg p-3 font-mono text-xs">
                <p>student_name,subject,score,max_score</p>
                <p className="text-muted-foreground">"Alice Johnson","Math",92,100</p>
                <p className="text-muted-foreground">"Bob Smith","Math",88,100</p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-medium">Requirements:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>File must be in CSV format</li>
                  <li>Include header row</li>
                  <li>Scores must be numeric</li>
                  <li>Max 500 records per upload</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
